import { Auth } from "aws-amplify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	FaMapMarkedAlt,
	FaDatabase,
	FaMoneyCheckAlt,
	FaEnvelopeOpenText,
	FaGem,
	FaHeart,
	FaPowerOff,
	FaBuffer,
	FaBus,
	FaPlus,
	FaClipboardList,
	FaFileImport,
	FaGasPump,
	FaRoute,
	FaTicketAlt,
	FaUserCog,
	FaUserPlus,
	FaListAlt,
	FaMapMarkerAlt,
	FaLocationArrow,
	FaUser,
	FaTools,
} from "react-icons/fa";
import {
	MdOutlineEventAvailable,
	MdCreate,
	MdPassword,
	MdPayments,
	MdOutlineAcUnit,
	MdSettingsApplications,
	MdAdminPanelSettings,
	MdSettingsSuggest,
	MdOutlineManageAccounts,
	MdNewLabel,
	MdMoneyOff,
	MdSend,
	MdNotificationAdd,
	MdLiveHelp,
	MdAlternateEmail,
	MdAlarmAdd,
	MdTextsms,
} from "react-icons/md";
import { TbLiveView } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { RiMailSendLine, RiFileTextFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
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
		<div className='h-screen'>
			<ProSidebar collapsed={sideBarCollapsed}>
				<div className=' h-10 py-2 border-b  border-purple-500 '>
					{/* Logo */}
					<div className='flex justify-center items-center'>
						<Link href='/' className='cursor-pointer'>
							<Image
								src={"/logo.png"}
								width={24}
								height={24}
								objectFit='contain'
							/>
						</Link>
					</div>
				</div>
				<SidebarContent className='scrollbar-thin'>
					<SidebarHeader>
						<Menu iconShape='round'>
							<MenuItem className='text-sm' icon={<FaBuffer />}>
								<Link href='/'>Dashboard</Link>
							</MenuItem>
						</Menu>
					</SidebarHeader>

					{sideBarCollapsed ? (
						<></>
					) : (
						<h4 className='text-white pl-4 pt-5'>Resources</h4>
					)}
					<Menu iconShape='round'>
						<SubMenu
							className='text-sm'
							title='Buses'
							icon={<FaBus className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href='/buses/new/'>New Bus</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/buses/'>Bus List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaFileImport />}>
								<Link href='/buses/import/'>Import Buses</Link>
							</MenuItem>
						</SubMenu>
						<SubMenu
							className='text-sm'
							title='Schedules'
							icon={<SafetyCheckIcon className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<DepartureBoardIcon />}>
								<Link href='/schedules/new/'>New Schedule</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<EventNoteIcon />}>
								<Link href='/schedules/'>Schedule List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaFileImport />}>
								<Link href='/schedules/import/'>Import Schedule</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Fuel'
							icon={<FaGasPump className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<MdOutlineManageAccounts />}>
								<Link href='/fuel/'>Fuel Management</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href='/fuel/'>Add Fuel</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Routes'
							icon={<FaRoute className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<MdNewLabel />}>
								<Link href='/routes/new'>New Route</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/routes/'>Route List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaFileImport />}>
								<Link href='/routes/import'>Import Routes</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Tickets'
							icon={<FaTicketAlt className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href='/tickets/new'>New Ticket</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/tickets/history'>Tickets List</Link>
							</MenuItem>
						</SubMenu>
					</Menu>

					{sideBarCollapsed ? (
						<></>
					) : (
						<h4 className='text-white pl-4 pt-5'>Management</h4>
					)}
					<Menu iconShape='round'>
						<SubMenu
							className='text-sm'
							title='Staffs'
							icon={<FaUserCog className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaUserPlus />}>
								<Link href='/staffs/newdriver'>New Driver</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href='/staffs/newconductor'>New Conductor</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/staffs/drivers'>Drivers List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaListAlt />}>
								<Link href='/staffs/conductors'>Conductors List</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Expenses'
							icon={<MdMoneyOff className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href='/expense/newexpense'>New Expense</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/expense/expenselist'>Expense List</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Reports'
							icon={<FcStatistics className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href='/reports/student'>Student Statistics</Link>
							</MenuItem>
						</SubMenu>
					</Menu>

					{sideBarCollapsed ? (
						<></>
					) : (
						<h4 className='text-white pl-4 pt-5'>Features</h4>
					)}
					<Menu iconShape='round'>
						<SubMenu
							className='text-sm'
							title='Reminder'
							icon={<MdNotificationAdd className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaPlus />}>
								<Link href={"/reminder/newreminder"}>Add Reminder</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								<Link href={"/reminder/reminderlist"}>Reminder List</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Tracking'
							icon={<FaLocationArrow className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaMapMarkerAlt />}>
								<Link href={"/tracking/trackingHistory"}>Tracking History</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<TbLiveView />}>
								<Link href={"/tracking/liveTracking"}>Live GPS</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Geofence'
							icon={<FaMapMarkedAlt className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<MdCreate />}>
								New Geofence
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaClipboardList />}>
								Geofence List
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdOutlineEventAvailable />}>
								Geofence Events
							</MenuItem>
						</SubMenu>
					</Menu>
					{sideBarCollapsed ? (
						<></>
					) : (
						<h4 className='text-white pl-4 pt-5'>Application</h4>
					)}

					<Menu iconShape='round'>
						<SubMenu
							className='text-sm'
							title='Users'
							icon={<FaUser className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<FaUserPlus />}>
								<Link href='/users/new'>New User</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaListAlt />}>
								<Link href='/users/'>Users List</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Settings'
							icon={<FaTools className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<MdAdminPanelSettings />}>
								<Link href={"/settings/companyPofile"}>Company Profile</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdSettingsApplications />}>
								<Link href={"/settings/siteSettings"}>Site Settings</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdOutlineAcUnit />}>
								<Link href={"/settings/unitsList"}>Units List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdPayments />}>
								<Link href={"/settings/paymentTypesList"}>
									Payment Types List
								</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaMoneyCheckAlt />}>
								<Link href={"/settings/currencyList"}>Currency List</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdPassword />}>
								<Link href={"/settings/changePassword"}>Change Password</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaDatabase />}>
								<Link href={"/settings/databaseBackup"}>Database Backup</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='SMS'
							icon={<MdTextsms className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<RiMailSendLine />}>
								<Link href={"/sms/sendSMS"}>Send SMS</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<RiFileTextFill />}>
								<Link href={"/sms/smsTemplate"}>SMS Templates</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<TbApi />}>
								<Link href={"/sms/smsAPI"}>SMS API</Link>
							</MenuItem>
						</SubMenu>

						<SubMenu
							className='text-sm'
							title='Email'
							icon={<MdAlternateEmail className='text-sm' />}
						>
							<MenuItem className='text-sm' icon={<MdAlarmAdd />}>
								<Link href={"/email/sendAlert"}>Send Alert</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdSend />}>
								<Link href={"/email/sendEmail"}>Send Email</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<FaEnvelopeOpenText />}>
								<Link href={"/email/emailTemplate"}>Email Templates</Link>
							</MenuItem>
							<MenuItem className='text-sm' icon={<MdSettingsSuggest />}>
								<Link href={"/email/mailSettings"}>Mail Settings</Link>
							</MenuItem>
						</SubMenu>
					</Menu>

					<SidebarFooter>
						<Menu iconShape='round'>
							<MenuItem className='text-sm' icon={<MdLiveHelp />}>
								<Link href={"/help"}>Help</Link>
							</MenuItem>
							<MenuItem
								className='text-sm'
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
