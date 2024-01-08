
{/* cai ...props kia se yeu cau javasc thu thap tat ca dao cu co trong phan funtion Section */}
export default function Section({title, children, ...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}