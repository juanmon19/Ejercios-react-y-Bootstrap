import { Formik, Field, ErrorMessage } from 'formik'

const FORM_ENDPOINT = 'https://formspree.io/f/xbdwovep'

function AppForm() {
  const validate = (values) => {
    const errors = {}

    if (!values.name.trim()) {
      errors.name = 'Este campo es requerido'
    }

    if (!values.email.trim()) {
      errors.email = 'Este campo es requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Correo electrónico inválido'
    }

    if (!values.message.trim()) {
      errors.message = 'Este campo es requerido'
    }

    return errors
  }

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ success: false, message: '' })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })

      let payload = null

      try {
        payload = await response.json()
      } catch {
        payload = null
      }

      if (!response.ok) {
        throw new Error(payload?.error || payload?.errors?.[0] || 'No se pudo enviar el mensaje')
      }

      setStatus({
        success: true,
        message: 'Gracias por contactarme. Te responderé pronto.',
      })
      resetForm()
    } catch (error) {
      setStatus({
        success: false,
        message: error.message || 'Ocurrió un error al enviar el mensaje',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: 'Hola te contacto por...',
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status, handleSubmit }) => (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__header">
            <p className="eyebrow">Formulario de contacto</p>
            <h1>Escríbeme</h1>
            <p className="subtitle">
              Completa los campos y te responderé lo antes posible.
            </p>
          </div>

          <div className="contact-form__field">
            <label htmlFor="name">Nombre</label>
            <Field id="name" type="text" name="name" autoComplete="name" />
            <ErrorMessage name="name" component="p" className="error-text" />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Correo electrónico</label>
            <Field id="email" type="email" name="email" autoComplete="email" />
            <ErrorMessage name="email" component="p" className="error-text" />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Mensaje</label>
            <Field id="message" as="textarea" name="message" autoComplete="off" rows="5" />
            <ErrorMessage name="message" component="p" className="error-text" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {status?.message && (
            <p className={status.success ? 'success-text' : 'error-text'}>
              {status.message}
            </p>
          )}
        </form>
      )}
    </Formik>
  )
}

export default AppForm
