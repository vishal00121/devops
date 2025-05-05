import Sidebaritem from './Sidebaritem';
import Home from '../icon/Home';
import People from '../icon/People';
import Payments from '../icon/Payments';
import User from '../icon/User';
import Reacoding from '../icon/Reacoding';
import { NavLink,} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-white h-screen w-78">
      <div className="flex justify-between p-6">
        <button className="bg-blue-900 px-4 py-2 rounded-lg">webinar.gg</button>
        <div className="py-4 px-6 hover:bg-[#e5e9ee] rounded-md">H</div>
      </div>
      <div className="mt-2 ml-4">
        <NavLink to = "/Home">
        <Sidebaritem title="Home" icon={<Home />} />
        </NavLink>
      </div>
      <div className="mt-2 ml-4">
        <Sidebaritem title="Webinars" icon={<People />} />
      </div>
      <div className="mt-2 ml-4">
        <NavLink to="/PaymentsBilling">

        <Sidebaritem title="Payments & Billing" icon={<Payments />} />
        </NavLink>
      </div>
      <div className="mt-2 ml-4">
        <NavLink to="/UserManagement">
          <Sidebaritem title="User Management" icon={<User />} />
        </NavLink>
      </div>
      <div className="mt-2 ml-4">
        <Sidebaritem title="Recordings" icon={<Reacoding />} />
      </div>
      
      
    </div>
  );
}

export default Sidebar;
