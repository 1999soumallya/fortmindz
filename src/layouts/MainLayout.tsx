import HeaderComponent from '@/components/header/header.component'
import { useAppSelector } from '@/services/hook'
import Loader from '@/shared/Loader'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    const { loading: employeeListLoading } = useAppSelector(state => state.employees)
    const { loading: employeeDetailsLoading } = useAppSelector(state => state.employee)

    const checkVisibility = () => {
        return !!(employeeListLoading || employeeDetailsLoading)
    }

    return (
        <>
            <Loader visible={checkVisibility()} />
            { /* Left drawer - containing page content and side bar (always open) */}
            <div className="drawer  lg:drawer-open">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <HeaderComponent />
                    <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200 min-h-[92dvh]">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayout
