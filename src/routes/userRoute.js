import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import ListCourse from '../Components/KhoaHoc/ListKhoaHoc'
import BlogPage from "../Components/BlogPage/BlogPage";
import Info from '../Components/Info/Info'
import DetailPage from '../Pages/DetailPage/DetailPage'
import CategoryCoursePage from '../Pages/CategoryCoursePage/CategoryCoursePage'
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'

export const userRoute = [
    {
        path: '/',
        component: <Layout Component={HomePage}></Layout>
    },
    {
        path: '/blog',
        component: <Layout Component={BlogPage}></Layout>
    },
    {
        path: '/khoahoc',
        component: <Layout Component={ListCourse}></Layout>
    },
    {
        path: '/info',
        component: <Layout Component={Info}></Layout>
    },
    {
        path: '/detail/:id',
        component: <Layout Component={DetailPage}></Layout>
    },
    {
        path: '/categorycourse/:id',
        component: <Layout Component={CategoryCoursePage}></Layout>
    },
    {
        path: '*',
        component: <Layout Component={NotFoundPage}></Layout>
    },



]