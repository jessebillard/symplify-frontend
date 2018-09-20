import React from 'react'
import { shallow, mount } from 'enzyme'
import NoteEditor from './Editor'
import Note from './Note'
import NoteList from './NoteList'
import { store } from '../store'

describe('Editor', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NoteEditor store={store} />)
    })

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })



})