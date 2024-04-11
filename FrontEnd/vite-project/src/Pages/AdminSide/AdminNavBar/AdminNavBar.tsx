import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AddModal from "../AddBook/AddModal";

const AdminNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#000',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/admin');
      }
    });
  };

  return (
    <Navbar className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">COS</p>
        <p className="font-bold text-inherit text-white">&nbsp;&nbsp;▷◁</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* Navigation items */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem> 
          <AddModal></AddModal>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onClick={handleLogout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AdminNavBar;
