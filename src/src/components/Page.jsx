export default function Page({ text, children }) {
    return <div>
        <h1>FiveMenu</h1>
        <h2>{text}</h2>
        {children}
    </div>
}