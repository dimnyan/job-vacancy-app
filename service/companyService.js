export async function getListUsersByCompanyId(id) {
  const response = await fetch(`/api/company/users`, {
    method: 'POST',
    body: JSON.stringify({
      company_id: id,
    })
  });
  const result = await response.json();
  return {
    data: result.data,
    metadata: {
      maxPage: result.totalItems,
    }
  }
}