export async function curl(url) {
  const res = await fetch(url);
  if (!res.ok) {
    return `<span class="text-red">${res.statusText}</span>`
  }
  return `<pre>${(await res.text()).replaceAll('<', '&lt').replaceAll('>', '&gt')}</pre>`;
}