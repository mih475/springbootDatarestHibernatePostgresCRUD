import EmpRoute from "./interfaces/routingInterface";
import CreateEmployee from "./CreateEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeList from "./EmployeeList";
import NotFound from "./NotFound";

const routes: EmpRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: EmployeeList,
        exact: true
    },
    {
        path: '/employee-list',
        name: 'Employee List',
        component: EmployeeList,
        exact: true
    },
    {
        path: '/create-employee',
        name: 'Create Employee',
        component: CreateEmployee,
        exact: true
    },
    {
        path: '/edit-employee/:number',
        name: 'Update Employee',
        component: EditEmployee,
        exact: true
    },
    {
        path: '*',
        name: 'Not Found',
        component: NotFound,
        exact: true
    }

]

export default routes;