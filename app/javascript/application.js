// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Add checked class when clicked
document.querySelector('.form-check-input').addEventListener('click', () => {
  document.querySelector('.task-details').classList.toggle('checked');
})
