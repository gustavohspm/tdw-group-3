import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

export default function AppFooter() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
            })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Container fluid>
            <div className='copyright'>&copy; 2022 Corporate. All Right Reserved.</div>
            <div className='links'>
                <ul>
                    <li><a href="https://www.ua.pt/pt/curso/508"></a></li>
                </ul>
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    )
}
