import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const articles = [
  {
    title: "LakerHacks 2026",
    source: "SUNY Oswego / MLH",
    date: "2026",
    description:
      "Organized SUNY Oswego’s first public hackathon, working on logistics, sponsorship, participant experience, and event communication.",
    link: "PASTE_ARTICLE_LINK_HERE",
  },
  {
    title: "Women in Computing",
    source: "SUNY Oswego",
    date: "2026",
    description:
      "Leadership, outreach, and student support work through Women in Computing, focused on building community for CS students.",
    link: "PASTE_ARTICLE_LINK_HERE",
  },
  {
    title: "Project Feature or Mention",
    source: "School / Hackathon / News",
    date: "2026",
    description:
      "Add any article, feature, Devpost post, news mention, or project write-up here.",
    link: "PASTE_ARTICLE_LINK_HERE",
  },
];

const Articles = () => {
  return (
    <Layout>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="manga-text text-3xl md:text-5xl mb-4 text-manga-primary dark:text-white manga-shadow">
            ARTICLES
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/90">
            Features, mentions, project write-ups, and stories connected to my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="manga-panel p-6 bg-[#f5e7d3] dark:bg-[#4a372a] block hover:scale-[1.02] transition-transform"
            >
              <p className="text-sm opacity-70 mb-2">
                {article.source} • {article.date}
              </p>

              <h3 className="manga-text text-2xl mb-3 text-[#3d2914] dark:text-[#f5e7d3]">
                {article.title}
              </h3>

              <p className="text-foreground/90 mb-4">
                {article.description}
              </p>

              <span className="text-manga-secondary font-bold">
                Read article →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;