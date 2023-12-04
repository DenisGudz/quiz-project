import logoImg from '../assets/quiz-logo.png'

function Header() {
    return (
        <header>
        <img src={logoImg} alt="" />
        <h1>ReactQuiz</h1>
        </header>
    )
}


export default Header