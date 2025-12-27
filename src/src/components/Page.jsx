import PageLink from "./PageLink"

export default function Page({ title, isHome, children }) {
    return (
        <div>
            <h1>{title}</h1>
            <div className="elements">
                {children}
                {!isHome && <PageLink to="">Back</PageLink>}
            </div>
        </div>
    )
}