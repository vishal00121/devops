function UserManagementItem({name,value1} :{
    name : string,
    value1 : string
}) {
  return (
    <>
    <h4 className="text-sm text-gray-600 mb-2">{name}</h4>
    <p className="font-medium">{value1}</p>

    </>
  )
}

export default UserManagementItem