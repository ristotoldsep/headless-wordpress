'use client'

import Input from "../components/Input"
import Textarea from "../components/Textarea"
import Fieldset from "../components/Fieldset"
import Button from "../components/Button"

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const fields = [
  {
    label: 'Name',
    component: 'INPUT',
    type: 'text',
    name: 'full_name',
    id: 'full_name'
  },
  {
    label: 'Email',
    component: 'INPUT',
    type: 'email',
    name: 'email',
    id: 'email'
  },
  {
    label: 'Subject',
    component: 'INPUT',
    type: 'text',
    name: 'subject',
    id: 'subject'
  },
  {
    label: 'Message',
    component: 'TEXTAREA',
    type: 'text',
    name: 'message',
    id: 'message'
  },
  
]

const Form = () => {
  return (
    <form className="flex flex-col gap-6">
      {fields.map(field => (
        <Fieldset key={field.id}>
          <label htmlFor={field.id} className="text-slate-900">{field.label}</label>
          {field.component === INPUT && <Input type={field.required} name={field.name} id={field.id} />}
          {field.component === TEXTAREA && <Textarea type={field.required} name={field.name} id={field.id} />}
        </Fieldset>
      ))}
    </form>
  )
}

export default Form