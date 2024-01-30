function openFileContent(file) {
    const files = ['home', 'about', 'projects', 'contact'];
    for (let i = 0; i < files.length; i++) {
      const content = $(`.${files[i]}Content`);
      const choosenFile = $(`.explorer-files li:nth-child(${i + 1})`);
      const choosenFileTab = $(`.taskbar li:nth-child(${i + 1})`);
      if (files[i] === file) {
        content.show();
        choosenFile.addClass('active-file');
        choosenFile.addClass('openFileContent');
        choosenFileTab.addClass('taskbar-tab-active');
      } else {
        content.hide();
        choosenFile.removeClass('active-file');
        choosenFile.removeClass('openFileContent');
        choosenFileTab.removeClass('taskbar-tab-active');
      }
    }
  }

  function openActivity(activity) {
    const activities = ['file', 'projects'];
    for (let i = 0; i < activities.length; i++) {
      const content = $(`#${activities[i]}Explorer`);
    //   const content = $(`.sidebar-projects`);
      const choosenActivity = $(`.activity-bar .a-bar-icon-container:nth-child(${i + 1})`);
      console.log(choosenActivity)
      if (activities[i] === activity) {
        content.show();
        choosenActivity.addClass('active');
        choosenActivity.addClass('openActivity');
      } else {
        content.hide();
        choosenActivity.removeClass('active');
        choosenActivity.removeClass('openActivity');
      }
    }
  }

  $(document).ready(function() {
    $.getJSON('projects.json', function(data) {
      const projectContainer = $('.projectsContent');     
      $.each(data.projects, function(index, project) {
        const projectDiv = $('<div>').addClass('project');
        const projectTitle = $('<h2> <b>').text(project.title);
        const projectDescription = $('<p>').text(project.description);
        const projectTools = $('<p>').addClass('tagged-text').text(project.toolsAndTechnologies);        
        const projectLinks = $('<p>');
        const content = $('.content');      
        const tooltip = $('<div>').addClass('tooltip').text(project.description);
        content.append(tooltip);
  
        $.each(project.link, function(index, link) {
          const linkElement = $('<a target="_blank">').attr('href', link).text(`Link ${index + 1}`);
          projectLinks.append(linkElement);
  
          if (index < project.link.length - 1) {
            projectLinks.append(', ');
          }
        });
        
        projectDiv.append(projectTitle, projectDescription, projectTools, projectLinks);
        projectContainer.append(projectDiv);
      });

    });
  });

  window.addEventListener('DOMContentLoaded', function() {
      const textContainer = document.getElementsByClassName('tagged-text');
    // Array.from(textContainer).forEach(function(textContainer) {
      //   const words = (textContainer.textContent ?? '').split(/\s|,/);
    
    // })
    console.log(textContainer)
    if (textContainer) {
      const words = (textContainer.textContent ?? '').split(/\s|,/);
    
      textContainer.innerHTML = '';
        
      console.log(words)
      words.forEach(function(word) {
        const span = document.createElement('span');
        span.textContent = word;
        span.classList.add('word-tag');
        console.log(span);
        // textContainer.append(span);
      });
    }


  });
