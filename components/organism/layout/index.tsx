import { ContentMain, Main } from "./styled";
import Footer from "../../molecules/footer";
import Header from "../../molecules/header";

interface IProps {
    children: React.ReactNode;
}

const Layout = (props: IProps) => {
    const { children } = props;
    return (
        <>
            <Header />

            <Main>
                <ContentMain>{children}</ContentMain>
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
