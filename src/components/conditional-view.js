
const ConditionalView = ({children, show}) => {
    
    if (!show)
        return null
    return (
        <>
        {children}
        </>
    )
}

export default ConditionalView;