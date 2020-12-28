import { createStore } from 'redux'
import {reducers} from './reducer'

export const infoStore = createStore(reducers) 

