import React from 'react';
import Layout from '../../components/Layout';

const FAQ = () => {
  return (
    <Layout sidebar>
      <div class="mr-2 mb-16 md:mb-0">
        <h2 class="text-2xl font-semibold pb-4 flex items-center">
          <span class="cursor-pointer" onclick="history.back()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left w-8 h-8"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
          Frequently Asked Questions
        </h2>
      </div>
    </Layout>
  )
}

export default FAQ;