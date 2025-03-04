document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let searchData;
  
    // Fetch the search index
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
      });
  
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      
      if (searchTerm.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
  
      const results = searchData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const contentMatch = item.content.toLowerCase().includes(searchTerm);
        const tagsMatch = item.tags.toLowerCase().includes(searchTerm);
        return titleMatch || contentMatch || tagsMatch;
      });
  
      displayResults(results);
    });
  
    function displayResults(results) {
      if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>';
        return;
      }
  
      const html = results.map(item => `
        <div class="search-result">
          <h3><a href="${item.url}">${item.title}</a></h3>
          <p class="meta">${item.category} | ${item.date}</p>
          <p class="tags">Tags: ${item.tags}</p>
        </div>
      `).join('');
  
      searchResults.innerHTML = html;
    }
  });