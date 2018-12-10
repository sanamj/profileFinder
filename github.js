class Github{
constructor(){
  this.client_id = '92c5c180ee4e0efef913';
  this.client_secret = '269d6b14ee87a19f04a56d9d8d88de10ebe30cc0';
  this.repos_count = 5;
  this.repos_sort = 'created:asc';
}
async getUser(user){
 const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
 const profile = await profileResponse.json();
 const repos = await repoResponse.json();
return {
  profile,
  repos
}
}
}