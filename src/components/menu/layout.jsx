export default function Layout (props) {
    return(
        <>
        <header>
        HEADER
        </header>
        <main>
        {props.children}
        </main>
        <footer>
            FOOTER
            </footer>

        </>



    );

}