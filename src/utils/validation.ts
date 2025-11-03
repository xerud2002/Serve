interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => boolean
}

interface ValidationRules {
  [key: string]: ValidationRule
}

export interface ValidationError {
  field: string
  message: string
}

export function validateForm(data: { [key: string]: string }, rules: ValidationRules): ValidationError[] {
  const errors: ValidationError[] = []

  Object.entries(rules).forEach(([field, rule]) => {
    const value = data[field] || ''

    // Required field check
    if (rule.required && !value.trim()) {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      })
      return
    }

    // Skip other validations if field is empty and not required
    if (!value.trim()) return

    // Minimum length check
    if (rule.minLength && value.length < rule.minLength) {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rule.minLength} characters`
      })
    }

    // Maximum length check
    if (rule.maxLength && value.length > rule.maxLength) {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} must not exceed ${rule.maxLength} characters`
      })
    }

    // Pattern check (email, phone, etc.)
    if (rule.pattern && !rule.pattern.test(value)) {
      if (field === 'email') {
        errors.push({
          field,
          message: 'Please enter a valid email address'
        })
      } else if (field === 'phone') {
        errors.push({
          field,
          message: 'Please enter a valid phone number'
        })
      } else {
        errors.push({
          field,
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} format is invalid`
        })
      }
    }

    // Custom validation
    if (rule.custom && !rule.custom(value)) {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is invalid`
      })
    }
  })

  return errors
}

// Common validation patterns
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/,
  postcode: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i
}

// Common validation rule sets
export const contactFormRules: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  email: {
    required: true,
    pattern: validationPatterns.email
  },
  phone: {
    required: false,
    pattern: validationPatterns.phone
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 200
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
}

export const volunteerFormRules: ValidationRules = {
  firstName: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  lastName: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    required: true,
    pattern: validationPatterns.email
  },
  phone: {
    required: true,
    pattern: validationPatterns.phone
  },
  address: {
    required: true,
    minLength: 10,
    maxLength: 200
  },
  postcode: {
    required: true,
    pattern: validationPatterns.postcode
  },
  motivation: {
    required: true,
    minLength: 50,
    maxLength: 500
  }
}