<template>
    <layout>

        <div class="hero">
            <h1 class="hero-title" v-html="$static.metadata.site.heroTitle" />
            <h2 class="hero-subtitle" v-html="$static.metadata.site.heroSubtitle" />
        </div>

        <div class="projects">
            <div class="project" v-for="post in $page.posts.edges" :key="post.node.id">
                <g-link :to="`/post/${post.node.id}`" class="project-link">
                  <g-image
                      :src="`${GRIDSOME_API_URL}${post.node.thumbnail.url}`"
                      :alt="post.node.title"
                      class="thumbnail"
                  />
                  <h3 class="project-title">{{ post.node.title }}</h3>
                  <div class="categories">
                      <span class="category" v-for="(tag, index) in post.node.tags" :key="index">{{ tag.title }}</span>
                  </div>
                </g-link>
            </div>
        </div>

        <div class="journals">
          <div class="latest-journals-heading container">
            <span class="label">最新文章</span>
          </div>
          <div class="latest-journals">
            <div class="container">
                <g-link :to="`/journal/${journal.node.id}`" class="journal" v-for="journal in $page.journals.edges" :key="journal.node.id">
                  <h3 class="journal-title">{{ journal.node.title }}</h3>
                </g-link>
            </div>
          </div>
      </div>

    </layout>
</template>

<static-query>
query {
  metadata {
    site {
      heroTitle
      heroSubtitle
    }
  }
}
</static-query>

<page-query>
query {
  posts: allStrapiPost{
    edges {
      node{
        id
        date (format: "YYYY")
        title
        tags{
            title
        }
        thumbnail{
            url (quality: 90)
        }
      }
    }
  }
  journals: allStrapiJournals (perPage: 4) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>


<script>
export default {
    name: 'homePage',
    metaInfo: {
      title: '欢迎哦'
    }
}
</script>

<style scoped>
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto / span 2;
  }
}


.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}

.journal:last-of-type {
  border-bottom: 0;
}

.journal:hover {
  background: var(--color-base-1);
}

.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}

@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }
  .journal:nth-child(1) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }

  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }

  .journal:nth-child(3) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 0;
  }
}

@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
  .journal:nth-child(1) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }

  .journal:nth-child(2) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }

  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}
</style>