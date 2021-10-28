export default interface EmpRoute{
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}