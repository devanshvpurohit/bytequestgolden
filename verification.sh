#!/bin/bash

echo "==================================="
echo "  BYTE QUEST - VERIFICATION REPORT"
echo "==================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "📦 Project Structure:"
echo "  - Components: $(find src/components -type f | wc -l | tr -d ' ') files"
echo "  - Utils: $(find src/utils -type f 2>/dev/null | wc -l | tr -d ' ') files"
echo "  - Hooks: $(find src/hooks -type f 2>/dev/null | wc -l | tr -d ' ') files"
echo "  - Game: $(find src/game -type f | wc -l | tr -d ' ') files"
echo ""

echo "📄 Documentation:"
ls -1 *.md 2>/dev/null | while read file; do
  size=$(wc -l < "$file" | tr -d ' ')
  echo "  - $file ($size lines)"
done
echo ""

echo "🔍 SEO Files:"
for file in public/sitemap.xml public/robots.txt; do
  if [ -f "$file" ]; then
    echo -e "  ${GREEN}✓${NC} $file"
  else
    echo -e "  ${YELLOW}✗${NC} $file (missing)"
  fi
done
echo ""

echo "🏗️  Build Status:"
if [ -d "dist" ]; then
  echo -e "  ${GREEN}✓${NC} Build directory exists"
  echo "  - Size: $(du -sh dist 2>/dev/null | cut -f1)"
  echo "  - Files: $(find dist -type f | wc -l | tr -d ' ')"
else
  echo -e "  ${YELLOW}✗${NC} Build directory not found (run: npm run build)"
fi
echo ""

echo "📊 Code Quality:"
echo "  - TypeScript files: $(find src -name "*.ts" -o -name "*.tsx" | wc -l | tr -d ' ')"
echo "  - Total src files: $(find src -type f | wc -l | tr -d ' ')"
echo ""

echo "✅ Ready for Production:"
checks=0
total=5

[ -f "public/sitemap.xml" ] && ((checks++))
[ -f "public/robots.txt" ] && ((checks++))
[ -f "README.md" ] && ((checks++))
[ -f "src/utils/constants.ts" ] && ((checks++))
[ -f "src/components/ErrorBoundary.tsx" ] && ((checks++))

echo "  Progress: $checks/$total checks passed"
if [ $checks -eq $total ]; then
  echo -e "  ${GREEN}✓ Production Ready!${NC}"
else
  echo -e "  ${YELLOW}⚠ Some checks incomplete${NC}"
fi

echo ""
echo "==================================="
echo "  Verification Complete"
echo "==================================="
