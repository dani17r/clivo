// composables/useEmailSender.ts
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

type EmailParams = {
  to_email: string
  from_name: string
  message: string
  subject?: string
}

export const useEmailSender = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const sendEmail = async (params: EmailParams) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await emailjs.send(
        String(process.env.VUE_APP_EMAILJS_SERVICE_ID),
        String(process.env.VUE_APP_EMAILJS_TEMPLATE_ID),
        {
          to_email: params.to_email,
          from_name: params.from_name,
          message: params.message,
          subject: params.subject || 'Nuevo mensaje de contacto'
        },
        String(process.env.VUE_APP_EMAILJS_PUBLIC_KEY)
      )

      success.value = true
      return { success: true }
    } catch (err) {
      error.value = 'Error al enviar el correo. Intenta nuevamente.'
      return { success: false, error: err }
    } finally {
      loading.value = false
    }
  }

  return {
    sendEmail,
    loading,
    error,
    success
  }
}