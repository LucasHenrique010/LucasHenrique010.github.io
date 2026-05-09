/* =====================
   Máscaras de input
   ===================== */
 
function maskPhone(v) {
  v = v.replace(/\D/g, '').slice(0, 11)
  if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  if (v.length > 6)  return v.replace(/^(\d{2})(\d{4})(\d*)/, '($1) $2-$3')
  if (v.length > 2)  return v.replace(/^(\d{2})(\d*)/, '($1) $2')
  return v
}
 
function maskCPF(v) {
  v = v.replace(/\D/g, '').slice(0, 11)
  if (v.length > 9) return v.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
  if (v.length > 6) return v.replace(/^(\d{3})(\d{3})(\d*)/, '$1.$2.$3')
  if (v.length > 3) return v.replace(/^(\d{3})(\d*)/, '$1.$2')
  return v
}
 
const telInput = document.getElementById('telefone')
const cpfInput = document.getElementById('cpf')
 
if (telInput) telInput.addEventListener('input', function () { this.value = maskPhone(this.value) })
if (cpfInput) cpfInput.addEventListener('input', function () { this.value = maskCPF(this.value) })
 
/* =====================
   Validação
   ===================== */
 
function validarCampo(id, fieldId) {
  const val = document.getElementById(id).value.trim()
  const field = document.getElementById(fieldId)
  if (!val) {
    field.classList.add('has-error')
    return false
  }
  field.classList.remove('has-error')
  return true
}
 
/* =====================
   Página 1 – Responsável
   ===================== */
 
function avancar() {
  const ok = [
    validarCampo('nome', 'f-nome'),
    validarCampo('telefone', 'f-telefone'),
    validarCampo('endereco', 'f-endereco'),
    validarCampo('cpf', 'f-cpf')
  ].every(Boolean)
 
  if (!ok) return
 
  localStorage.setItem('resp_nome', document.getElementById('nome').value.trim())
  localStorage.setItem('resp_telefone', document.getElementById('telefone').value.trim())
  localStorage.setItem('resp_endereco', document.getElementById('endereco').value.trim())
  localStorage.setItem('resp_cpf', document.getElementById('cpf').value.trim())
 
  window.location.href = 'crianca.html'
}
 
/* =====================
   Página 2 – Criança
   ===================== */
 
function finalizar() {
  const ok = [
    validarCampo('nome-crianca', 'f-nome-crianca'),
    validarCampo('idade', 'f-idade'),
    validarCampo('escola', 'f-escola')
  ].every(Boolean)
 
  if (!ok) return
 
  localStorage.setItem('cri_nome', document.getElementById('nome-crianca').value.trim())
  localStorage.setItem('cri_idade', document.getElementById('idade').value.trim())
  localStorage.setItem('cri_escola', document.getElementById('escola').value.trim())
 
  window.location.href = 'sucesso.html'
}
 
/* =====================
   Página 3 – Resumo
   ===================== */
 
function carregarResumo() {
  const set = (id, key) => {
    const el = document.getElementById(id)
    if (el) el.textContent = localStorage.getItem(key) || '—'
  }
 
  set('s-nome',       'resp_nome')
  set('s-telefone',   'resp_telefone')
  set('s-endereco',   'resp_endereco')
  set('s-cpf',        'resp_cpf')
  set('s-nome-crianca', 'cri_nome')
  set('s-idade',      'cri_idade')
  set('s-escola',     'cri_escola')
}
 
function novoCadastro() {
  const chaves = ['resp_nome','resp_telefone','resp_endereco','resp_cpf','cri_nome','cri_idade','cri_escola']
  chaves.forEach(k => localStorage.removeItem(k))
  window.location.href = 'responsavel.html'
}