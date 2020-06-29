import React, {useContext} from 'react'
import { UserContext, ChannelContext } from './../App'

function ComponentC() {

    const uc = useContext(UserContext)
    const cc = useContext(ChannelContext)

    return (
        <div>
            {uc} watches {cc}
        </div>
    )
}

export default ComponentC
