# Put the Discovery Edition on GitHub

## Choose the right ZIP

**Max-Learning-Lab-Explorer-Edition.zip** is the COMPLETE website. Use it for a new repository, or if you are unsure which earlier version you uploaded.

**Max-Learning-Lab-Discovery-Update.zip** is a SMALLER UPDATE for the most recent 29-person Learning Edition. It needs that site's existing data, pictures and logo. It is not a complete website by itself.

## Update your existing Learning Edition

1. Unzip the Discovery Update on your computer.
2. Open your repository on github.com and select the Code tab. Be at its top level, where index.html is.
3. Choose Add file → Upload files. Drag ALL of the extracted update contents onto the upload area, including the data and assets folders. Preserve the folders.
4. Commit the changes to main. Existing files with the same paths are replaced; earlier photos are kept. This update has fewer than 100 files.
5. Keep Settings → Pages set to Deploy from a branch → main → /(root). After the deployment completes, reload the website. If necessary, close and reopen the home-screen shortcut.

## Create a NEW page with the complete ZIP

A computer browser is simplest for this larger upload. GitHub's browser upload allows up to 100 files at a time, so use these batches. The ZIP is larger than 100 files because all pictures are included locally.

1. Create a PUBLIC repository named `max-learning-lab-v2` (or another name you prefer). Add a README when creating it.
2. Unzip **Max-Learning-Lab-Explorer-Edition.zip**. Open the extracted folder and check that index.html is directly inside it.
3. At the repository's top level choose Add file → Upload files. Upload all loose top-level files plus the **data** folder. Leave the **assets** folder for the next steps. Commit to main.
4. At the top level choose Add file → Create new file. Name it `assets/README.md`, type `Learning Lab pictures`, and commit. This creates an assets folder.
5. Open **assets** in GitHub. Choose Add file → Upload files. From the extracted ZIP's assets folder, drag the **places**, **gallery**, and **ui** folders together. Commit to main. Keep those subfolders intact.
6. While still inside **assets** in GitHub, upload the **cities** and **people** folders together. Commit to main.
7. Check: index.html is at the top level; the pictures are under assets/places, assets/gallery, assets/ui, assets/cities and assets/people. Do not upload a second enclosing project folder.
8. Open Settings → Pages. Source: **Deploy from a branch**. Branch: **main**. Folder: **/(root)**. Click Save if available.
9. After the deployment succeeds, GitHub Pages shows the published address. For owner rrolfe and repository max-learning-lab-v2, it will be `https://rrolfe.github.io/max-learning-lab-v2/` once published. A different repository name changes that final part.

GitHub Desktop can upload the complete extracted site in one commit instead of the browser batches.

## On an iPad or phone

Open the published link. English/Español is at the top. Touch controls and layouts adapt to smaller screens. On supported iPhones/iPads, add the page to the Home Screen for the web-app presentation. The manifest is included. This package does not implement guaranteed offline caching, so load it with internet available.

## Before replacing an existing page

Grown-up corner → Save a progress backup keeps a copy of the current progress. The new edition uses the existing progress format and retains prior answers/passport stamps on the same browser. Import the backup if needed. Each device saves its own progress.

## If something looks missing

- A broken photo usually means an assets subfolder was omitted or nested twice.
- A 404 means the Pages deployment, repository name or index.html location needs checking.
- The new homepage has TWO large photo cards and seven illustrated activity cards.
- Open Actions in GitHub to inspect the Pages deployment if it has not completed.

Official instructions (checked September 26, 2026):
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
