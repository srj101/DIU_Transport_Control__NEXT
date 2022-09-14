import { Auth } from "aws-amplify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGem, FaHeart, FaPowerOff } from "react-icons/fa";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

type Props = {
  sideBarCollapsed?: boolean | undefined;
};
const Sidebar = ({ sideBarCollapsed }: Props) => {
  return (
    <div className="h-screen">
      <ProSidebar collapsed={sideBarCollapsed}>
        <div className="bg-zinc-900 h-10 py-2 border-b border-r-8 border-purple-500">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src={"/logo.png"}
                width={24}
                height={24}
                objectFit="contain"
              />
            </Link>
          </div>
        </div>
        <SidebarContent className="bg-zinc-900 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-purple-900 hover:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <SidebarHeader>
            <Menu iconShape="round">
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/">Dashboard</Link>
              </MenuItem>
            </Menu>
          </SidebarHeader>

          {sideBarCollapsed ? (
            <></>
          ) : (
            <h4 className="text-white pl-4 pt-5">Resources</h4>
          )}
          <Menu iconShape="round">
            <SubMenu
              className="text-sm"
              title="Buses"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/buses/new/">New Bus</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/buses/">Bus List</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/buses/import/">Import Buses</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Fuel"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/fuel/">Fuel Management</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/fuel/">Add Fuel</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Routes"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/routes/new">New Route</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/routes/">Route List</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/routes/import">Import Routes</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Tickets"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/tickets/new">New Ticket</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/tickets/history">Tickets List</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          {sideBarCollapsed ? (
            <></>
          ) : (
            <h4 className="text-white pl-4 pt-5">Management</h4>
          )}
          <Menu iconShape="round">
            <SubMenu
              className="text-sm"
              title="Staffs"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/staffs/newdriver">New Driver</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/staffs/newconductor">New Conductor</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/staffs/drivers">Drivers List</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/staffs/conductors">Conductors List</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Expenses"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                New Expense
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Expense List
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Reports"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                New Expense
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Expense List
              </MenuItem>
            </SubMenu>
          </Menu>

          {sideBarCollapsed ? (
            <></>
          ) : (
            <h4 className="text-white pl-4 pt-5">Features</h4>
          )}
          <Menu iconShape="round">
            <SubMenu
              className="text-sm"
              title="Reminder"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                Reminder List
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Add Reminder
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Tracking"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                Tracking History
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Live GPS
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Geofence"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                New Geofence
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Geofence List
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Geofence Events
              </MenuItem>
            </SubMenu>
          </Menu>
          {sideBarCollapsed ? (
            <></>
          ) : (
            <h4 className="text-white pl-4 pt-5">Application</h4>
          )}

          <Menu iconShape="round">
            <SubMenu
              className="text-sm"
              title="Users"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/users/new">New User</Link>
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                <Link href="/users/">Users List</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Settings"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                Company Profile
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Site Settings
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Units List
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Payment Types List
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Currency List
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Change Password
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Database Backup
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="SMS"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                Send SMS
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                SMS Templates
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                SMS API
              </MenuItem>
            </SubMenu>

            <SubMenu
              className="text-sm"
              title="Email"
              icon={<FaHeart className="text-sm" />}
            >
              <MenuItem className="text-sm" icon={<FaGem />}>
                Send Alert
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Send Email
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                Email Templates
              </MenuItem>
              <MenuItem className="text-sm" icon={<FaGem />}>
                MAIL Settings
              </MenuItem>
            </SubMenu>
          </Menu>

          <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem className="text-sm" icon={<FaGem />}>
                Help
              </MenuItem>
              <MenuItem
                className="text-sm"
                icon={<FaPowerOff />}
                onClick={async () => await Auth.signOut()}
              >
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
