import UserManagementItem from "./UserManagementItem";

function UserManagement() {
  return (
    <div className="h-full  pt-8">
      <div className="flex justify-center">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gray-100 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-gray-300 text-2xl font-bold">
                H
              </div>
              <div>
                <h2 className="text-xl font-semibold">Harshit Shukla</h2>
                <p className="text-gray-600">harshitshukla6388@gmail.com</p>
              </div>
            </div>
            <button className="text-blue-500 hover:underline">Edit Profile</button>
          </div>

          {/* Account Information */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <UserManagementItem
                  name="Account Number"
                  value1="dfhjhdjhgjkdsfhgjhdfsjghdfskj"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <UserManagementItem
                  name="Sign-In Email"
                  value1="Harshitshukla638gamil.com"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <UserManagementItem name="OTP Authentication" value1="On" />
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="p-6 border-t border-gray-200">
            <button className="w-full py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-lg">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
