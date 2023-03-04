import Header from './header';

function Layout({ children }) {
    return (
        <div className="container mx-auto content-center prose mb-8">
            <Header />
              <div className="w-full flex flex-col items-center">

            {children}
            </div>
        </div>
    );
}

export default Layout;
