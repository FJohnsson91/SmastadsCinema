import Container from 'react-bootstrap/Container'

export default function StartPage() {

  return <>
    <section className='bg-dark text-light p-5 text-center'>
      <Container>
        <div>
          <div>
            <h1>Welcome!</h1>
            <img className='img-fluid w-50 ms-auto' src='/smastads-cinema-logo.png' />
          </div>
        </div>
      </Container>
    </section>
  </>

}