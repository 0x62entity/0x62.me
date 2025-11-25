export async function curl(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return `<span class="text-red">${res.status}</span>`;
    }
    return `<pre>${(await res.text()).replaceAll('<', '&lt').replaceAll('>', '&gt')}</pre>`;
  } catch (e) {
      return `<span class="text-red">${e.toString()}</span>`;
  }
}