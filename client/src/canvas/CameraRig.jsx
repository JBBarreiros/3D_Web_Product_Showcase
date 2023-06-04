import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'

const CameraRig = ({children}) => {
    const group = useRef()
    const snap = useSnapshot(state)

    useFrame((state, delta) => {
        easing.dampE(
            group.current.rotation,
            [state.pointer.y * 0.1, -state.pointer.x * 0.2, 0],
            0.25
        )
    })

    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig