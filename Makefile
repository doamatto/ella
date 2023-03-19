.phony: all

all:
	rm -f ella-prod.txt # Remove already build files
	touch ella-prod.txt
	cat frontmatter.txt > ella-prod.txt
	cat rules/annoyances.txt >> ella-prod.txt
	cat rules/bandwidth-saving.txt >> ella-prod.txt
	cat rules/service-workers.txt >> ella-prod.txt
	cat rules/tracking.txt >> ella-prod.txt
	cat rules/utms.txt >> ella-prod.txt
	cat rules/xtra-bandwidth-saving.txt >> ella-prod.txt

clean:
	rm ella-prod.txt