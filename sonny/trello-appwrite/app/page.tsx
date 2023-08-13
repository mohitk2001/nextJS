import { Board } from '@/Components/Board'
import Header from '@/Components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
     {/* Headeer starts here */}
      <Header/>
     {/* Board */}
     <Board/>
    </main>
  )
}
