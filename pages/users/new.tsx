import React, { useState } from "react";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import MainLayout from "../../components/Layout/MainLayout";
import { message, Button, Checkbox, Form, Input, Typography } from "antd";
import { createUser } from "../../utils/queries/query";
import { CreateUser } from "../../types/types";
import { FormInstance } from "antd/es/form";
import { useRouter } from "next/router";

const NewUser = ({
  username,
  groups,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = React.createRef<FormInstance>();

  async function AdminUserCreate(values: CreateUser) {
    setLoading(true);
    try {
      const { message: msg } = await createUser(values);
      if (msg) {
        message.success(msg);
        formRef.current?.resetFields();
        setLoading(false);
        router.push("/users/");
      }
    } catch (err: any) {
      console.log(err.response.data.message);
      message.error(err.response.data.message);
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <div className="py-8 flex flex-col items-center">
        <Typography.Title level={5} className="pb-6">
          Create User
        </Typography.Title>
        <Form
          ref={formRef}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={AdminUserCreate}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" disabled={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);

  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        authenticated: true,
        username: user.username,
        groups:
          user.signInUserSession.accessToken.payload["cognito:groups"] || [],
      },
    };
  } catch (err) {
    return {
      props: {
        authenticated: false,
      },
    };
  }
};

export default NewUser;
