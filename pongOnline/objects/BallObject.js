



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-dc6f99c21c664327b3323c443396ffc273e4005a7660629ebf8b359a46459647.css" integrity="sha256-3G+ZwhxmQyezMjxEM5b/wnPkAFp2YGKev4s1mkZFlkc=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-353440cd9f938346cfeea3a8695d02c6e77ec49f906fcb7cb8b1dc9c3cbb049e.css" integrity="sha256-NTRAzZ+Tg0bP7qOoaV0Cxud+xJ+Qb8t8uLHcnDy7BJ4=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-20e2831691c9bb0a4dc1bd778529fc1c16ec8c8a24b32d9964f984772d2eb24b.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-ab1086948a3be528001710080ba17e4975ddb36a9379ab7dddfdb0370647b7c1.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>online_ping_pong/BallObject.js at master · imtaekh/online_ping_pong</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/12193322?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="imtaekh/online_ping_pong" name="twitter:title" /><meta content="online_ping_pong - Fun online ping pong!" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/12193322?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="imtaekh/online_ping_pong" property="og:title" /><meta content="https://github.com/imtaekh/online_ping_pong" property="og:url" /><meta content="online_ping_pong - Fun online ping pong!" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NzE0NDgwNzowMGJkODZmZTY3YjU5NGU2ZjA3YWYzMTVmN2FiNGI2YTpiMjk5MGVkOTEyNjFjNzE1MjlhOWE5Y2VjNWZhMDYxZTU1OTk0MjVlN2FiMzU3MjQzODc4M2QyOWMyN2NjZThm--14c5605ec89be96e8c7a5c4eed5d71ad822136f4">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="B6E62B63:3F89:818283B:56F2BE1B" name="octolytics-dimension-request_id" /><meta content="7144807" name="octolytics-actor-id" /><meta content="KimTaeJun" name="octolytics-actor-login" /><meta content="422ba374d420c65d34304a6dcb42abeaca2866c2a7586ae141b46903ec33927d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="KimTaeJun">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YTM4MzFlMWMyN2IwYjlhYjQxMTBmMWUzMjU1MTQ4Mjk1MjQ4ZDlkZjM3OWMyMDhmMGEwMzllOTAzNTU1ZGU2Znx7InJlbW90ZV9hZGRyZXNzIjoiMTgyLjIzMC40My45OSIsInJlcXVlc3RfaWQiOiJCNkU2MkI2MzozRjg5OjgxODI4M0I6NTZGMkJFMUIifQ==">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="d72c007a066609fda87b0c6784550022816682fd" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="3151828551a72cbdf3a02abcb85b241c">
    

      
  <meta name="description" content="online_ping_pong - Fun online ping pong!">
  <meta name="go-import" content="github.com/imtaekh/online_ping_pong git https://github.com/imtaekh/online_ping_pong.git">

  <meta content="12193322" name="octolytics-dimension-user_id" /><meta content="imtaekh" name="octolytics-dimension-user_login" /><meta content="51046982" name="octolytics-dimension-repository_id" /><meta content="imtaekh/online_ping_pong" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="51046982" name="octolytics-dimension-repository_network_root_id" /><meta content="imtaekh/online_ping_pong" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/imtaekh/online_ping_pong/commits/master.atom" rel="alternate" title="Recent Commits to online_ping_pong:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/imtaekh/online_ping_pong/blob/master/pongOnline/objects/BallObject.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" role="img" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


      <div class="site-search scoped-search js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/imtaekh/online_ping_pong/search" class="js-site-search-form" data-scoped-search-url="/imtaekh/online_ping_pong/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="form-control js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-unscoped-placeholder="Search GitHub"
      data-scoped-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:7144807" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="imtaekh/online_ping_pong">This repository</span>
  </div>
    <a class="dropdown-item" href="/imtaekh/online_ping_pong/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/KimTaeJun"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@KimTaeJun" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/7144807?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">KimTaeJun</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/KimTaeJun" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rCuatxkpKaS8p0BYj4oLfIJzUdq8GQ1i4/nyyP9gFf6F5YLpz5OTnR5W3lU9IxH7onOgdSaRa1J00VVNddEqxw==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tm0EglIikHcFvx0Ra+OgBHusWiPJECkWGljCmVO3qFXprrnEkfFoONnCswaS5b7cGNc+6DK2n2naxRnW8MYjdg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="51046982" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/imtaekh/online_ping_pong/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/imtaekh/online_ping_pong/watchers">
            1
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/imtaekh/online_ping_pong/unstar" class="js-toggler-form starred" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+2Rtx2/Ihtr9ZW95NC/dK1fcOZk8demLe/3+s+1VW4Buj4vF7iYKHyxeiK0oB49mTqVx5lhycC+sPaVtDS4JPA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar imtaekh/online_ping_pong"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/imtaekh/online_ping_pong/stargazers">
          0
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/imtaekh/online_ping_pong/star" class="js-toggler-form unstarred" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sRqVvFWP/+yA/Y7NYWV48m0oHtV9y9CEDDAhrHzzmVPt50nsToHqpMCgfUxFoSjycGL1tT315ZesqxhUJvB9Pw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star imtaekh/online_ping_pong"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/imtaekh/online_ping_pong/stargazers">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of imtaekh/online_ping_pong to your account"
              aria-label="Fork your own copy of imtaekh/online_ping_pong to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/imtaekh/online_ping_pong/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/imtaekh/online_ping_pong/network" class="social-count">
      0
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/imtaekh" class="url fn" rel="author">imtaekh</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/imtaekh/online_ping_pong" data-pjax="#js-repo-pjax-container">online_ping_pong</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/imtaekh/online_ping_pong" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /imtaekh/online_ping_pong" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/imtaekh/online_ping_pong/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /imtaekh/online_ping_pong/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/imtaekh/online_ping_pong/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /imtaekh/online_ping_pong/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/imtaekh/online_ping_pong/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /imtaekh/online_ping_pong/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/imtaekh/online_ping_pong/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /imtaekh/online_ping_pong/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/imtaekh/online_ping_pong/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /imtaekh/online_ping_pong/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/imtaekh/online_ping_pong/blob/a6ab0763c834affd23aa38c6c9ff4d99f35e3a6d/pongOnline/objects/BallObject.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:411087881b7fb055e60062e33149767d -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/imtaekh/online_ping_pong/blob/master/pongOnline/objects/BallObject.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/imtaekh/online_ping_pong/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/imtaekh/online_ping_pong"><span>online_ping_pong</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/imtaekh/online_ping_pong/tree/master/pongOnline"><span>pongOnline</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/imtaekh/online_ping_pong/tree/master/pongOnline/objects"><span>objects</span></a></span><span class="separator">/</span><strong class="final-path">BallObject.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/imtaekh/online_ping_pong/contributors/master/pongOnline/objects/BallObject.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/imtaekh/online_ping_pong/raw/master/pongOnline/objects/BallObject.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/imtaekh/online_ping_pong/blame/master/pongOnline/objects/BallObject.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/imtaekh/online_ping_pong/commits/master/pongOnline/objects/BallObject.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/imtaekh/online_ping_pong?branch=master&amp;filepath=pongOnline%2Fobjects%2FBallObject.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/imtaekh/online_ping_pong/edit/master/pongOnline/objects/BallObject.js" class="inline-form js-update-url-with-hash" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lx14tlwWJJ1HU35uo3ASd0mbL0lmdCpSq8MoifCGxJDEbgJ+/i5P78CtSB1gG8L50iL2VjyQS3q0/+wYhPD3dA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/imtaekh/online_ping_pong/delete/master/pongOnline/objects/BallObject.js" class="inline-form" data-form-nonce="d72c007a066609fda87b0c6784550022816682fd" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5Mk92xIeuY2jp3vwv8JvFX4qKER65U9qJBhF+FdfTagiTtFiIL8UvZW/djEeoapEYjLLStYX3B/1BemL8/upOg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      124 lines (111 sloc)
      <span class="file-info-divider"></span>
    4.06 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">SETTINGS</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>../SETTINGS.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> BaseObejct <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>./BaseObject.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">COLLUSION_TYPE</span> <span class="pl-k">=</span> { NO_COLLUSION<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, VERTICAL<span class="pl-k">:</span> <span class="pl-c1">1</span>, HORIZONTAL<span class="pl-k">:</span> <span class="pl-c1">2</span>};</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Ball</span>(<span class="pl-smi">player0Id</span>, <span class="pl-smi">player1Id</span>){</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">BaseObejct</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">playerIds</span> <span class="pl-k">=</span> [player0Id,player1Id];</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span>{};</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">speed</span> <span class="pl-k">=</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">angleToVelocity</span>(<span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">move</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-c1">status</span>.<span class="pl-c1">shape</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rectangle<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-c1">status</span>.<span class="pl-smi">rect</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    x <span class="pl-k">:</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">WIDTH</span><span class="pl-k">/</span><span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    y <span class="pl-k">:</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">HEIGHT</span><span class="pl-k">/</span><span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    width <span class="pl-k">:</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">BALL</span>.<span class="pl-c1">WIDTH</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    height <span class="pl-k">:</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">BALL</span>.<span class="pl-c1">HEIGHT</span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    color <span class="pl-k">:</span> {fill<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#000000<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Ball</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">BaseObejct</span>();</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Ball</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">constructor</span> <span class="pl-k">=</span> Ball;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Ball</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">update</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">room</span>){</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-smi">move</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">room</span>.<span class="pl-c1">status</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>playing<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ball <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">status</span>.<span class="pl-smi">rect</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ball</span>.<span class="pl-c1">x</span> <span class="pl-k">+=</span> <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">xVel</span><span class="pl-k">*</span><span class="pl-v">this</span>.<span class="pl-smi">speed</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ball</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">yVel</span><span class="pl-k">*</span><span class="pl-v">this</span>.<span class="pl-smi">speed</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* dedug mode</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    if(ball.x &lt;= 50 || ball.x &gt;= SETTINGS.WIDTH - 50 ){</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    this.speed = 0.2;</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      } else {</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      this.speed = 2;</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    }</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    */</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">ball</span>.<span class="pl-c1">x</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span> <span class="pl-k">-</span> <span class="pl-smi">ball</span>.<span class="pl-c1">width</span><span class="pl-k">*</span><span class="pl-c1">2</span>){</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">room</span>.<span class="pl-smi">objects</span>[<span class="pl-v">this</span>.<span class="pl-smi">playerIds</span>[<span class="pl-c1">1</span>]].<span class="pl-smi">score</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">90</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">initialize</span>();</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">ball</span>.<span class="pl-c1">x</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">WIDTH</span> <span class="pl-k">+</span> <span class="pl-smi">ball</span>.<span class="pl-c1">width</span><span class="pl-k">*</span><span class="pl-c1">2</span>){</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">room</span>.<span class="pl-smi">objects</span>[<span class="pl-v">this</span>.<span class="pl-smi">playerIds</span>[<span class="pl-c1">0</span>]].<span class="pl-smi">score</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">90</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">initialize</span>();</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">ball</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> <span class="pl-smi">ball</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span> <span class="pl-k">+</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">BORDER_WIDTH</span>){</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">ball</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">ball</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">HEIGHT</span> <span class="pl-k">-</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">BORDER_WIDTH</span>){</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> object <span class="pl-k">in</span> <span class="pl-smi">room</span>.<span class="pl-smi">objects</span>){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">room</span>.<span class="pl-smi">objects</span>[object].<span class="pl-smi">role</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>player<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> playerStat <span class="pl-k">=</span> <span class="pl-smi">room</span>.<span class="pl-smi">objects</span>[object].<span class="pl-c1">status</span>.<span class="pl-smi">rect</span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> collusionType <span class="pl-k">=</span> <span class="pl-en">ballCollusionCheck</span>(ball, playerStat, <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">xVel</span><span class="pl-k">*</span><span class="pl-v">this</span>.<span class="pl-smi">speed</span>);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">switch</span>(collusionType){</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">NO_COLLUSION</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">VERTICAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">HORIZONTAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">            <span class="pl-v">this</span>.<span class="pl-smi">dynamic</span> <span class="pl-k">=</span> <span class="pl-en">bounce</span>(<span class="pl-c1">90</span>,<span class="pl-v">this</span>.<span class="pl-smi">dynamic</span>.<span class="pl-smi">angle</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Ball</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">initialize</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">objects</span>){</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> ball <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">status</span>.<span class="pl-smi">rect</span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">ball</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">WIDTH</span><span class="pl-k">/</span><span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">ball</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-c1">SETTINGS</span>.<span class="pl-c1">HEIGHT</span><span class="pl-k">/</span><span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Ball;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">bounce</span>(<span class="pl-smi">serfaceAngle</span>,<span class="pl-smi">angle</span>){</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> newAngle <span class="pl-k">=</span> (serfaceAngle<span class="pl-k">*</span><span class="pl-c1">2</span><span class="pl-k">-</span>angle)<span class="pl-k">%</span><span class="pl-c1">360</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-en">angleToVelocity</span>(newAngle);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">angleToVelocity</span>(<span class="pl-smi">angle</span>){</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    angle <span class="pl-k">:</span> angle,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    xVel <span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">cos</span>(angle<span class="pl-k">/</span><span class="pl-c1">180</span><span class="pl-k">*</span><span class="pl-c1">Math</span>.<span class="pl-c1">PI</span>),</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    yVel <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">sin</span>(angle<span class="pl-k">/</span><span class="pl-c1">180</span><span class="pl-k">*</span><span class="pl-c1">Math</span>.<span class="pl-c1">PI</span>)</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ballCollusionCheck</span>(<span class="pl-smi">ballStat</span>,<span class="pl-smi">playerStat</span>,<span class="pl-smi">xVel</span>){</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-en">pointSquareCollusionCheck</span>(      <span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span>     , <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)){</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">pointSquareCollusionCheck</span>(<span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">-</span> xVel, <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">VERTICAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">HORIZONTAL</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-en">pointSquareCollusionCheck</span>(      <span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span>     , <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)){</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">pointSquareCollusionCheck</span>(<span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">-</span> xVel, <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">VERTICAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">HORIZONTAL</span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-en">pointSquareCollusionCheck</span>(      <span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span>     , <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)){</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">pointSquareCollusionCheck</span>(<span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">-</span> xVel, <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">VERTICAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">HORIZONTAL</span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-en">pointSquareCollusionCheck</span>(      <span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span>     , <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)){</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">pointSquareCollusionCheck</span>(<span class="pl-smi">ballStat</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">-</span> xVel, <span class="pl-smi">ballStat</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">ballStat</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>, playerStat)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">VERTICAL</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">HORIZONTAL</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">COLLUSION_TYPE</span>.<span class="pl-c1">NO_COLLUSION</span>;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">pointSquareCollusionCheck</span>(<span class="pl-smi">x</span>,<span class="pl-smi">y</span>,<span class="pl-smi">square</span>){</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(x <span class="pl-k">&gt;=</span> <span class="pl-smi">square</span>.<span class="pl-c1">x</span><span class="pl-k">-</span><span class="pl-smi">square</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">&amp;&amp;</span> x <span class="pl-k">&lt;=</span> <span class="pl-smi">square</span>.<span class="pl-c1">x</span><span class="pl-k">+</span><span class="pl-smi">square</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&gt;=</span> <span class="pl-smi">square</span>.<span class="pl-c1">y</span><span class="pl-k">-</span><span class="pl-smi">square</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&lt;=</span> <span class="pl-smi">square</span>.<span class="pl-c1">y</span><span class="pl-k">+</span><span class="pl-smi">square</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span> )</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" role="img" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.10362s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-IOKDFpHJuwpNwb13hSn8HBbsjIoksy2ZZPmEdy0usks=" src="https://assets-cdn.github.com/assets/frameworks-20e2831691c9bb0a4dc1bd778529fc1c16ec8c8a24b32d9964f984772d2eb24b.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-qxCGlIo75SgAFxAIC6F+SXXds2qTeat93f2wNwZHt8E=" src="https://assets-cdn.github.com/assets/github-ab1086948a3be528001710080ba17e4975ddb36a9379ab7dddfdb0370647b7c1.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

