export const formatPhone = ( phone: string ): string => {
  const mask = phone.length < 11 ? /(\d{4})(\d)/u : /(\d{5})(\d)/u

  return phone.replace( /\D/gu, '' )
    .replace( /(\d{2})(\d)/u, '($1) $2' )
    .replace( mask, '$1-$2' )
    .substr( 0, 15 )
}