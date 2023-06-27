import MainWindow from "../components/MainWindow/MainWindow";
import noslogo from "../../assets/noslogo.png";

const AppMain = () => {
    return (
        <MainWindow windowTitle="nosIM" maximizeDisabled>
            <div className="container mx-auto h-full max-w-[250px]">
                <main className="flex flex-col h-full">
                    <div className="main-logo flex justify-end flex-col bg-aim-blue p-2 h-[200px]">
                        <img className="h-auto w-full" src={noslogo} alt="" />
                    </div>
                </main>
            </div>
        </MainWindow>
    )
};

export default AppMain;