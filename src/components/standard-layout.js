import Header from './header';

function Layout({ children }) {
    return (
        <div className="container mx-auto content-center prose">
            <Header />
              <div className="w-full flex flex-col items-center">

            {children}
            </div>
        </div>
    );
}

export default Layout;
