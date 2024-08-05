import Background from '../assets/images/car-background.jpeg'

function Home() {
    return (
        <div
            style={{ backgroundImage: `url(${Background})` }}
            className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 bg-black bg-opacity-50 text-white rounded'>Cars 4 You</h3>
            </div>
        </div>
    )
}

export default Home