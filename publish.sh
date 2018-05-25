npm run build
dir='../sangamesh1439.github.io/'
rm -rf $dir/*
cp ./dist/* $dir -R
cd $dir
git add .
git commit -m "publish"
git push origin master