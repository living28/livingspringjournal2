<Box >
        <Head>
          <title>Living Spring Journals</title>
          <meta name="viewport" 
          content="minimum-scale=1, initial-scale=1, width=device-width"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid item>
          <main className={styles.main}>
            <Main/>
            <Drawer
              open={openDrawer}
              onClose={handleToggle}
              width={200}>
              <MenuItem>
              <Button variant="text" size="small" 
                color="primary" onClick={handleToggle}  className={classes.mt}
                startIcon={<EqualizerIcon/>}>Downloads</Button>
              </MenuItem>
              <MenuItem>
              <Button variant="text" size="small" 
                color="primary" onClick={handleToggle}
              startIcon={<LocalLibraryIcon />} gutterRight>Quick links</Button>
              </MenuItem>
            </Drawer>
          </main>
        </Grid>
        <Grid item>
          <footer className={styles.footer}>
            <BottomMenu/>
          </footer>
        </Grid>
</Box>