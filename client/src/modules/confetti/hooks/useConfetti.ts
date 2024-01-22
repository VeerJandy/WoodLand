'use client'

import { useContext } from 'react'

import { ConfettiContext } from '../components/ConfettiProvider'

const useConfetti = () => useContext(ConfettiContext)!

export default useConfetti
