import Link from 'next/link'

export default function Page() {
  return( 
  
  <div className="space-y-8 md:space-y-6 sm:p-9">
    <h1 className="card-title font-bold">Ini rencananya landing page</h1> 

    <Link href="/signup"><button>Sign up</button></Link>   
  </div>

  
  )}
