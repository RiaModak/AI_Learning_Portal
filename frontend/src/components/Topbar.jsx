import { LogOut, Bell } from "lucide-react";

function Topbar() {

    return (

        <div className="bg-white shadow-sm border-b px-8 py-5 flex justify-between items-center">

            <div>

                <h1 className="text-2xl font-bold">
                    Welcome back 👋
                </h1>

                <p className="text-slate-500">
                    Super Administrator
                </p>

            </div>

            <div className="flex items-center gap-5">

                <Bell
                    size={22}
                    className="text-slate-500 cursor-pointer"
                />

                <div className="text-right">

                    <p className="text-sm text-slate-500">
                        Super Admin
                    </p>

                </div>

                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Topbar;